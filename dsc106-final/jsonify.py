import pandas as pd

df = pd.read_csv('bo.txt', sep='\t')
df = df[['Total Box Office']]
print('solo: ', {i[0]: int(i[1][1:].replace(',', '')) for i in zip(df.index, df['Total Box Office'])})