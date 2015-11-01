import post from '../models/post';

export default (req, res) => {
    if(req.session.user){
        res.render('index', {
            title:'index',
            user: req.session.user
        });
    }else{
        res.redirect('login');
    }
    
};