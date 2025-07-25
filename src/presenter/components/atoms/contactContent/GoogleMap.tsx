const GoogleMap = () => {
  return (
    <div className="w-full h-[366px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2354.013396551589!2d44.74393027606205!3d41.71211631228917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4044739c6d763dc3%3A0xf59ac98907b00493!2sUniLab!5e1!3m2!1sen!2sge!4v1752229100812!5m2!1sen!2sge"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map Location"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
