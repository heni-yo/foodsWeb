import { MixedList, EntitySchema } from "typeorm";
import User from "./User";


const entities : MixedList<string | Function | EntitySchema<any>>
= [User]
export default entities 