


class Dashboardcontroleer {
    async dashboard(req, res) {
        res.render('admin/dashboard')
    }
}

module.exports = new Dashboardcontroleer();