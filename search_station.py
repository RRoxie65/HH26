import pandas as pd
# import time

def array_of_stations(stations, str):
    arr = stations[stations['Stop_Name'].str.contains(str, case=False)]
    return arr

def main():
    stations = pd.read_csv('fare-evasion-by-borough-q4-2025/MTA_Subway_Stations_Evasion_Percentage.csv', usecols=['Stop_Name', 'Borough', 'Evasion_Percentage'])
    station = input("Enter a station: ")

    station_array = array_of_stations(stations, station)
    print(station_array)

if __name__ == "__main__":
    main()