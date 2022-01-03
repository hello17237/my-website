import os

cwd = "C:/Users/zhaor/MASTER/PROJECTS/WEBDEV/mywebsite/src/components/Photography/Photos"
photos = os.listdir(cwd)

for i in range(len(photos)):
    cur_name = photos[i]
    cur_path = os.path.join(cwd, cur_name)
    new_name = 'poo' + str(i) + '.JPG'
    new_path = os.path.join(cwd, new_name)
    os.rename(cur_path, new_path)

for i in range(len(photos)):
    cur_name = 'poo' + str(i) + '.JPG'
    cur_path = os.path.join(cwd, cur_name)
    new_name = str(i) + '.JPG'
    new_path = os.path.join(cwd, new_name)
    os.rename(cur_path, new_path)