const Contacts = ({ isFit }: { isFit: boolean }) => {
  return (
    <div className="mb-2 hidden w-full items-center justify-end lg:flex">
      <a
        href="tel:+7 (499) 290-02-58"
        className={`${isFit ? "text-white" : "text-dark"} hover:underline`}
      >
        Звоните нам: +7 (499) 290-02-58
      </a>
    </div>
  );
};

export default Contacts;
