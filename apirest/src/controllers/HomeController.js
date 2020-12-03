class HomeController {
  async index(req, res) {
    res.status(201).json({ info: 'Escola API 1.0' });
  }
}

export default new HomeController();
