import { ImFacebook2 } from 'react-icons/im';
import { FaGithubSquare, FaWhatsappSquare, FaInstagramSquare, FaLinkedin} from 'react-icons/fa';

import './Social.scss';

function Social () {
    return (
        <ul className="social">
            <li className="social__item">
                <a
                    className="social__link link"
                    target="_blank"
                    href="">
                    <FaWhatsappSquare
                        className="social__icon--wt"
                    />
                    <svg class="link__graphic link__graphic--slide" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
                        <path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"></path>
                    </svg>
                </a>
            </li>
            <li className="social__item link">
                <a
                    className="social__link"
                    target="_blank"
                    href="">
                    <ImFacebook2
                        className="social__icon--fb"
                    />
                    <svg class="link__graphic link__graphic--slide" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
                        <path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"></path>
                    </svg>
                </a>
            </li>
            <li className="social__item link">
                <a
                    className="social__link"
                    target="_blank"
                    href="">
                    <FaInstagramSquare
                        className="social__icon--in"
                    />
                    <svg class="link__graphic link__graphic--slide" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
                        <path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"></path>
                    </svg>
                </a>
            </li>
            <li className="social__item link">
                <a
                    className="social__link"
                    target="_blank"
                    href="">
                    <FaGithubSquare
                        className="social__icon--gh"
                    />
                    <svg class="link__graphic link__graphic--slide" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
                        <path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"></path>
                    </svg>
                </a>
            </li>
            <li className="social__item link">
                <a
                    className="social__link"
                    target="_blank"
                    href="">
                    <FaLinkedin
                        className="social__icon--ld"
                    />
                    <svg class="link__graphic link__graphic--slide" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
                        <path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"></path>
                    </svg>
                </a>
            </li>
        </ul>
    )
};

export default Social;