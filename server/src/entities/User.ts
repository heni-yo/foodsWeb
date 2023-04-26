import { Entity ,BaseEntity,Column, PrimaryGeneratedColumn} from "typeorm";
import {IsEmail,MinLength} from 'class-validator'
import {ObjectType,Field, ID} from 'type-graphql'

@ObjectType()
@Entity()
export default class User extends BaseEntity{
    @Field(()=>ID)
    @PrimaryGeneratedColumn()
    id!: number
    
    @Field()
    @MinLength(5)
    @Column({nullable:false})
    name!: string
    
    @Field()
    @IsEmail() 
    @Column({nullable:false})
    email!: string
    
    @Column({nullable:false})
    password!: string 
    
    @Column({default:false})
    confirmed!: boolean
} 
