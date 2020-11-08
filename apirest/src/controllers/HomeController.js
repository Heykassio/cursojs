import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      name: 'Débora',
      lastname: 'Santos',
      email: 'deborasantos@live.com',
      phone: '34318051',
      age: 24,
      weight: 70,
      height: 166,
    });
    res.status(201).json(novoAluno);
  }
}

export default new HomeController();
