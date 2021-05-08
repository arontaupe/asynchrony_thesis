def get_exp_data():
     #read in source csv
     df = pd.read_csv (r'Database_AllParticipants_av_experiment_122522_2021-04-16_08h48.38_8b7284ca-9e90-11eb-a72a-ac1f6b405aea.csv', encoding='utf-8-sig')
     return df
