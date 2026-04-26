import pandas as pd
    
stations = pd.read_csv('fare-evasion-by-borough-q4-2025/MTA_Subway_Stations_Evasion_Percentage.csv', usecols=['Stop_Name', 'Borough', 'Daytime_Routes', 'Fare_Evasion', 'Ridership', 'Evasion_Percentage'], dtype={'Fare_Evasion':"Int64",'Ridership':"Int64"})

def above_or_below_average(stations):
   avg = stations['Evasion_Percentage'].mean()
   std = stations['Evasion_Percentage'].std()
   
   def assign_category(evasion):
      if pd.isna(evasion):
         return None
      elif evasion < (avg - 0.5 * std):
         return "Below Average"
      elif evasion <= (avg + 0.5 * std):
         return "Near Average"
      else:
         return "Above Average"
   
   stations['comparison_to_rest_of_city'] = stations['Evasion_Percentage'].apply(assign_category)
   
   return stations

# making json of station data
stations = stations[stations['Borough'] != 'SI']
stations = above_or_below_average(stations)
stations.to_json("stations_data.json", orient="records")

# making json of station names
# station_names = stations['Stop_Name'].tolist()
# stations_json = pd.Series(station_names).to_json("station_names.json", orient="records")

# above_average_stations = stations[stations['comparison_to_rest_of_city'] == 'Below Average']
# print(above_average_stations[['Stop_Name', 'Borough', 'Evasion_Percentage', 'comparison_to_rest_of_city']])