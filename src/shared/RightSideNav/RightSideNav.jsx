import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import qZone1 from '../../assets/qZone1.png';
import qZone2 from '../../assets/qZone2.png';
import qZone3 from '../../assets/qZone3.png';


const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3, mb-6 space-y-4">
                <h2 className="text-2xl font-bold"> Login with    </h2>
                <button className="btn btn-outline btn-accent w-full"><FaGoogle /> Login with Google</button>
                <button className="btn btn-outline btn-accent w-full"><CiFacebook /> Login with Facebook</button>
                <button className="btn btn-outline btn-accent w-full"> <FaGithub></FaGithub> Login with Github</button>
            </div>
            <div className="p-4 space-y-3, mb-6 space-y-4">
                <h2 className="text-3xl mb-6">Find us on</h2>
                <a className="p-4 flex items-center border rounded-xl" href=""><FaFacebook className="mr-3"></FaFacebook> Facebook</a>
                <a className="p-4 flex items-center border rounded-xl" href=""><FaTwitter className="mr-3"></FaTwitter> Twitter</a>
            </div>

            {/* Q-Zone */}
            <div className="p-4 space-y-3, mb-6 space-y-4">
                <h2 className="text-3xl mb-6">Q Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />

            </div>
        </div>
    );
};

export default RightSideNav;