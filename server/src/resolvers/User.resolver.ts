import { Query, Resolver, Arg, Mutation, Ctx } from "type-graphql";
import User from "../entities/User";
import UserCreateInput from "../inputs/UserCreateInput";
import { hash, compare } from "bcrypt";
import UserLoginInput from "../inputs/UserLoginInput";

@Resolver()
export default class UserResolver {
  @Query(() => [User])
  async Users(): Promise<User[]> {
    const users = await User.find();
    return users;
  }

  @Query(() => User, { nullable: true })
  async User(@Arg("id") id: number): Promise<User | null> {
    const user = await User.findOne({ where: { id } });
    return user;
  }

  @Mutation(() => User)
  async createUser(@Arg("data") data: UserCreateInput): Promise<User> {
    data.password = await hash(data.password, 10);
    const user = User.create({ ...data });
    await user.save();
    return user;
  }
  @Mutation(() => User, { nullable: true })
  async login(
    @Arg("data") data: UserLoginInput,
    @Ctx() ctx: MyCtx
  ): Promise<User | null> {
    const user = await User.findOne({ where: { email: data.email } });
    if (!user) {
      return null;
    }
    const valid = await compare(data.password, user.password);
    if (!valid) {
      return null;
    }
    ctx.req.session.userId = user.id;
    return user;
  }
  @Query(() => User, { nullable: true })
  async MeUser(@Ctx() ctx: MyCtx): Promise<User | null> {
    console.log(ctx.req.session)
    if (!ctx.req.session.userId) {
      return null;
    }
    const user = await User.findOne({ where: { id: ctx.req.session.userId } });
    return user;
  }
}
