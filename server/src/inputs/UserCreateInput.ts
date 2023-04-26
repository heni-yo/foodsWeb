import { Field, InputType } from "type-graphql";

@InputType()
export default class UserCreateInput   {
    @Field()
    name!: string
    
    @Field()
    email!: string
    
    @Field()
    password!: string 
}