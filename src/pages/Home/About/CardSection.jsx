

import toysData from '/Projects/Milestone 11 Mongodb/Toy-hub-client/public/toysData.json';




const CardSection = () => {
    const toyTypes = ['Action Figure', 'Stuffed Animal', 'Pretend Play'];

    return (
      <div className="container mx-auto my-8">
        {toyTypes.map((toyType) => (
          <div key={toyType} className="my-6">
            <h2 className="text-xl font-bold">{toyType}</h2>
            <div className="grid grid-cols-2 gap-4">
              {toysData
                .filter((toy) => toy.toyType === toyType)
                .map((toy) => (
                  <div key={toy.toyName} className="p-4 border">
                    <img
                      src={toy.pictureUrl}
                      alt={toy.toyName}
                      className="w-full h-auto mb-2"
                    />
                    <h3 className="text-lg font-bold">{toy.toyName}</h3>
                    <p>Price: ${toy.price}</p>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    );
};

export default CardSection;