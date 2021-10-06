import { React } from 'react';
import dortania from '../../image/dortania-logo-clear.png';
import './Home.css';

const Home = () => {
    return(
        <div className='main-content'>
        <section>
            <img className='dortania-logo' src={dortania} alt='Dortania-logo-clear'/>
            <h1 id='main-title'>Dortania's OpenCore Install Guide</h1>
            <p className='description'>Current supported version 0.7.2</p>
            <p className='getting-started'>
                <a  href='https://dortania.github.io/OpenCore-Install-Guide/prerequisites.html'>Getting Started→</a>
            </p>
        </section>
        <section className='section2'>
            <h2 className='usage-title'>What is OpenCore and who is this guide for</h2>
            <p>OpenCore is what we refer to as a "boot loader" – it is a complex piece of software that we use to prepare our systems for macOS – specifically by injecting new data for macOS such as SMBIOS, ACPI tables and kexts. How this tool differs from others like Clover is that it has been designed with security and quality in mind, allowing us to use many security features found on real Macs, such as <a href='https://support.apple.com/en-ca/HT204899'>System Integrity Protection</a> and <a href='https://support.apple.com/en-ca/HT204837'>FileVault</a>. A more in-depth look can be found here: <a href='https://dortania.github.io/OpenCore-Install-Guide/why-oc.html'>Why OpenCore over Clover and others</a></p>
            <p>This guide specifically focuses on two main things:</p>
            <ul>
                <li>Installing macOS on an X86-based PC</li>
                <li>Teaching you what makes your Hack work</li>
            </ul>
            <p>Because of this, you will be expected to read, learn and even use Google. This is not a simple one-click install setup.</p>
            <p>Please remember that OpenCore is still new and currently in beta. While quite stable, and arguably much more stable than Clover in pretty much every way, it is still being frequently updated, so chunks of configuration change quite often (i.e. new quirks replacing old ones).</p>
            <p>Lastly, those having issues can visit both the <a href='https://www.reddit.com/r/hackintosh/'>r/Hackintosh subreddit</a> and <a href='https://discord.com/invite/u8V7N5C'>r/Hackintosh Discord</a> for more help.</p>
        </section>
        </div>
    );
};

export default Home;