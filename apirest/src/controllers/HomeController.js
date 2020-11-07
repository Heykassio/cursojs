class HomeController {
  index(req, res) {
    res.status(201).json({
      tudoCerto: true,
    });
  }
}

export default new HomeController();
