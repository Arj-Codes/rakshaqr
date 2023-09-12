const Video = () => {
  return (
    <div className="min-h-[100vh] sm:max-h-[100vh] md:min-h-fit py-10 w-full flex flex-col gap-10 items-center justify-center">
      <h1 className="w-full text-center text-[1.2rem] lg:text-[1.5rem] font-[600] xxl:text-[2.5rem]">
        Play the video and know more about RakshaQR
      </h1>
      <div className="vid w-[95%] md:w-[80%] lg:w-[70%] h-[60vh] mx-auto bxshadowv1">
        <iframe
          className="rounded-3xl mx-auto w-full h-full"
          src="https://www.youtube.com/embed/TrhRkuSaT00?si=Wppe-7eqORJMKgRF"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Video;

