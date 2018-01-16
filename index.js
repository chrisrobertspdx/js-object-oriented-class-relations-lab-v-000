
let store = {drivers: [], passengers: [], trips: []};

let driverId = 0;

class Driver {
    constructor(name) {
        this.id = ++driverId;
        this.name = name;
        store.drivers.push(this);
    }
    trips() {
        return store.trips.filter(t => {
            return t.driverId === this.id;
        })
    }
    passengers() {
        let driver_passengers = [];
        this.trips().forEach(t => {
            driver_passengers.push( store.passengers.find( p => {
                return p.id === t.passengerId
            }) )
        })
        return driver_passengers;
    }
}

let PassengerId = 0;

class Passenger {
    constructor(name) {
        this.id = ++PassengerId;
        this.name = name;
        store.passengers.push(this);
    }
    trips() {
        return store.trips.filter(t => {
            return t.passengerId === this.id;
        })
    }   
    drivers() {
        let psg_drivers = [];
        this.trips().forEach(t => {
            psg_drivers.push( store.drivers.find( d => {
                return d.id === t.driverId
            }) )
        })
        return psg_drivers;
    }
}

let TripId = 0;

class Trip {
    constructor(driver,passenger) {
        this.id = ++TripId;
        this.passengerId = passenger.id;
        this.driverId = driver.id;
        store.trips.push(this);
    }
    driver() {
        return store.drivers.find(d => { return d.id === this.driverId});
    }
    passenger() {
        return store.passengers.find(p => { return p.id === this.passengerId});
    }
}