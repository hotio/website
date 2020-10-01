#!/usr/bin/python3
# NOT WORKING with python2 !!!
# inspired from https://gist.github.com/zamber/af5086cb9c097be5c002

import os
import re
import yaml

# Config
root_doc_dir = 'source/docs'
mkdocs_yml = 'source/mkdocs.yml'

# http://blog.codinghorror.com/sorting-for-humans-natural-sort-order/
def sorted_nicely(l):
    """ Sort the given iterable in the way that humans expect.
        Modified to ignore case sensitivity in sorting. """
    convert = lambda text: int(text) if text.isdigit() else text
    alphanum_key = lambda key: [
        convert(c) for c in re.split('([0-9]+)', key.lower())]
    return sorted(l, key=alphanum_key)

def prettify(title):
    """ Convert a filename to a title cased, numbered title. """
    title = re.split('-', re.sub('_', '-', title))
    if (any(title) == False):
        return ''
    elif (title[0].isdigit()):
        title[0] += '.'
    return re.sub('\.md$', '', ' '.join(title))

def extract_title_md(md_file):
    """ Return the first level 1 md title (without # and trailing newline) """
    with open(md_file, "r") as f:
        #text = f.read()
        line=''
        while ('# ' not in line):
            line = f.readline()
    return line.lstrip('# ').rstrip('\n')

def set_nav(nav):
    """ Update the nav part in mkdocs conf file """
    with open(mkdocs_yml) as f:
        doc = yaml.safe_load(f)
    doc['nav'] = nav
    with open(mkdocs_yml, 'w') as f:
        yaml.dump(doc, f)

def build_nav(path, value, recursive_list):
    """ For each level in path, it builds nested list of dicts. 
        The value is append on the last level list regarding to the path. 
        recursive_list is used internally for recursivity """
    while path.startswith('/'):
        path = path[1:]
    
    if len(path)==0:
        # At root level, no need to build list of dicts, just append the value at root level
        recursive_list.append(value)
    else:
        parts = path.split('/', 1)
        current_level = parts[0]

        # We need to find if our level of path is already present in the list
        # If we find it, we need to keep a track of the index to be able to update the list
        level_found = False
        index = 0
        for indx, dicts in enumerate(recursive_list):
            if current_level in dicts:
                level_found=True
                index = indx

        if len(parts) > 1:
            # We're at an intermediary path level
            # We need to pass the right existing list to the recursive call OR
            # We need to create an empty node
            if level_found:
                branch=recursive_list[index][current_level]
            else:
                dic = {}
                dic[current_level] = []
                recursive_list.append(dic)
                branch = dic[current_level]
            build_nav(parts[1], value, branch)
        else: 
            # We're at the lowest path level
            # We need to apply our value to the right existing list OR
            # We need to create to a new node with it
            if level_found: 
                recursive_list[index][current_level].append(value)
            else:
                d = {}
                d[current_level] = [value]
                recursive_list.append(d)

def nav_to_string(nav_list, level):
    """ Print the content of the nav dictionary """
    if nav_list:
        for indx, dicts in enumerate(nav_list):
            for title, lists in dicts.items():
                indent = ''
                for i in range(level+1):
                    indent = indent + '  '
                if type(lists) is list:
                    print(indent + "- " + title + ":")
                    nav_to_string(lists,level+1)
                else:
                    print(indent + "- " + title + ": " + lists)


# List all md files in the doc folder or subfolders
md_dict = {}
for paths, dirs, files in os.walk(root_doc_dir):
    path = paths.strip('./')
    
    # Ignore assets folders
    # if ('asset' not in path):
    md_dict[path] = []
    for file in files:
        if file.endswith(".md"):
            md_dict[path].append(file)
    
# Remove empty nodes
md_dict={k: v for k, v in md_dict.items() if len(v)>0}

# print(md_dict)
nav_final=[]
for true_path in sorted_nicely(md_dict): # Iteration on all folders
    # Remove root doc dir in all path in nav
    nav_path=prettify(true_path.lstrip(root_doc_dir + "/"))
    
    for filename in sorted_nicely(md_dict[true_path]):
        true_pathfile = true_path + "/" + filename
        pathfile = nav_path + "/" + filename
        pathfile=pathfile.strip("/") # Strip leading / when at root_dir

        nav_entry={}
        nav_entry[extract_title_md(true_pathfile)]=pathfile
        
        build_nav(nav_path, nav_entry, nav_final)

# print(nav_final)

print("################## Nav ########################")
nav_to_string(nav_final, 0)
print("###############################################")

set_nav(nav_final)
print("Nav block replaced in "+mkdocs_yml)
