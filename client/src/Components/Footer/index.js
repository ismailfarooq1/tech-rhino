import { Link } from 'react-router-dom';
import './styles.css';

const Footer = () => {

    return (
            <footer className='bg-dark text-white p-5'>
                <div className='container text-center'>
                    <section className="">
                        <form action="">
                            <div className="row d-flex justify-content-center">
                                <div className="col-auto">
                                    <p className="pt-2">
                                        <strong>Sign up for our newsletter</strong>
                                    </p>
                                </div>

                                <div className="col-md-5 col-12">
                                    <div className="form-outline form-white mb-4">
                                        <input type="email" id="subscribe-email" className="form-control" placeholder="Email address"/>
                                        <label className="form-label d-none" for="subscribe-email">Email address</label>
                                    </div>
                                </div>

                                <div className="col-auto">
                                    <button type="submit" className="btn btn-outline-light mb-4">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </form>
                    </section>
                </div>

                <div className="container links-footer">
                    <div className="row">
                        <div className="col-md-3 col-12">
                            <Link to='/' className='nav-link nav-link-left'>
                                Home
                            </Link>
                        </div>
                        <div className='col-md-3 offset-md-3 col-12'>
                            <h5>About Us</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                        </div>

                    </div>
                </div>

            </footer>
    );
}

export default Footer;