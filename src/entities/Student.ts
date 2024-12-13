export interface Student{
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
}

export interface CreateUserCommand{
  firstName: string;
  lastName: string;
  phone: string;
}

export interface UserDto{
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
}