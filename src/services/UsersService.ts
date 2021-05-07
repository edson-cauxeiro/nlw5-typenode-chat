import { getCustomRepository, Repository } from 'typeorm';

import { User } from '../entities/User';
import { UsersRepository } from '../repositories/UsersRepository';



// interface IUserCreate {
//   email: string;
// }

class UsersService {
  private usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
  }
  
  async create( email: string ) {
    const userExists = await this.usersRepository.findOne({ email });
    
    // Verificar se usuario existe
    if(userExists) {
      return userExists;
    }

    //se não existir, salvar no DB
    const user = this.usersRepository.create({ email });

    await this.usersRepository.save(user);
    
    //se existir, retornar user
    return user;
  }

  async findByEmail( email: string) {
    const user = await this.usersRepository.findOne({ email });

    return user;
  }



}

export { UsersService }