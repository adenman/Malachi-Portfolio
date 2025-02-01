import '../css/Home.css';

function FindMe() {


  return (
    <>
    <div>
        <h1 className='my-20 text-4xl text-white flex justify-center'>Find Me</h1>
    </div>

    <div className='flex justify-center space-x-10'>
        {/* Add links to your social media in the a href="Link" tags below */}
        <a href="">
        <img className='w-32 h-32 rounded-xl' src="/instagram.webp" alt="Instagram" />
        </a>

        <a href="">
        <img className='w-32 h-32 rounded-xl' src="/github.png" alt="GitHub" />
        </a>

        <a href="">
        <img className='w-32 h-32' src="/LinkedIn.png" alt="LinkedIn" />
        </a>
      </div>
    </>
  );
}

export default FindMe;