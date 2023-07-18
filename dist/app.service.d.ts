import { CreateUserEvent } from './create-user.event';
export declare class AppService {
    getHello(): string;
    handleUserCreated(data: CreateUserEvent): void;
}
