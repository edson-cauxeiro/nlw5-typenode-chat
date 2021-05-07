import { Request, Response } from "express"


import { ConnectionsService } from "../services/ConnectionsService";


class ConnectionsController {

  async create( request: Request, response: Response ) {
    const { admin_id, id, socket_id, user_id } = request.body;
    
    const connectionsService = new ConnectionsService();

   
      const connection = await connectionsService.create({ 
        admin_id,
        id,
        socket_id,
        user_id
      });

      return response.json(connection);
  }

  // async showByUser(request: Request, response: Response ) {
  //   const { id } = request.params;

  //   // console.log(id);

  //   const messagesService = new MessagesService();

  //   const list = await messagesService.listByUser(id);

  //   return response.json(list);
  // }

}

export { ConnectionsController }; 


