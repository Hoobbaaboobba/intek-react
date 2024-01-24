const Contacts = ({ more40 }: { more40: boolean }) => {
  return (
    <div className="mb-2 hidden w-full items-center justify-end lg:flex">
      <a
        href="tel:+7 (499) 290-02-58"
        className={more40 ? "text-dark-gray" : "text-white"}
      >
        Звоните нам: +7 (499) 290-02-58
      </a>
    </div>
  );
};

export default Contacts;
