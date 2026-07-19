---
hide:
  - toc
title: hotio/whisparr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/whisparr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project v2](https://github.com/whisparr/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-link-16: Upstream Project v3](https://github.com/whisparr/whisparr-eros){ class="header-links" target="_blank" rel="noopener" }  

<div id="tags-table">
  <table>
    <thead>
      <tr>
        <th>Tags <span class="twemoji" title="Click Tag to Copy"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2z"></path></svg></span></th>
        <th>Description</th>
        <th>Commit</th>
        <th>Last Updated</th>
      </tr>
    </thead>
    <tbody id="tags-table-body">
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10632" onclick="CopyToClipboard('tag10632');return false;" class="tag-decoration">v2</div><div id="tag471" onclick="CopyToClipboard('tag471');return false;" class="tag-decoration">v2-5dd76d2</div><div id="tag12900" onclick="CopyToClipboard('tag12900');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag13575" onclick="CopyToClipboard('tag13575');return false;" class="tag-decoration">v2-v2</div><div id="tag17349" onclick="CopyToClipboard('tag17349');return false;" class="tag-decoration">v2-v2.2</div><div id="tag23735" onclick="CopyToClipboard('tag23735');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/5dd76d29651963aabf95be18d24a45f397c90062" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29356440855" target="_blank">2026-07-14 18:05:12</a></td></tr>
<tr><td><div id="tag20864" onclick="CopyToClipboard('tag20864');return false;" class="tag-decoration">v2-develop</div><div id="tag659" onclick="CopyToClipboard('tag659');return false;" class="tag-decoration">v2-develop-a4ad935</div><div id="tag1612" onclick="CopyToClipboard('tag1612');return false;" class="tag-decoration">v2-develop-2.2.0-develop.141</div><div id="tag12767" onclick="CopyToClipboard('tag12767');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag29831" onclick="CopyToClipboard('tag29831');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag1112" onclick="CopyToClipboard('tag1112');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/a4ad93559ed1c47634e2271a61a1adb57bd3ecdc" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29681491856" target="_blank">2026-07-19 09:23:26</a></td></tr>
<tr><td><div id="tag13506" onclick="CopyToClipboard('tag13506');return false;" class="tag-decoration">v3</div><div id="tag25807" onclick="CopyToClipboard('tag25807');return false;" class="tag-decoration">v3-be17d29</div><div id="tag30349" onclick="CopyToClipboard('tag30349');return false;" class="tag-decoration">v3-3.3.4-release.794</div><div id="tag13532" onclick="CopyToClipboard('tag13532');return false;" class="tag-decoration">v3-v3</div><div id="tag3758" onclick="CopyToClipboard('tag3758');return false;" class="tag-decoration">v3-v3.3</div><div id="tag11470" onclick="CopyToClipboard('tag11470');return false;" class="tag-decoration">v3-v3.3.4</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/be17d29c400052915b1b18741e61dd7e6f4f625d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29356451636" target="_blank">2026-07-14 18:05:24</a></td></tr>
<tr><td><div id="tag28736" onclick="CopyToClipboard('tag28736');return false;" class="tag-decoration">v3-develop</div><div id="tag6396" onclick="CopyToClipboard('tag6396');return false;" class="tag-decoration">v3-develop-b04f65a</div><div id="tag29566" onclick="CopyToClipboard('tag29566');return false;" class="tag-decoration">v3-develop-3.3.5-develop.846</div><div id="tag3734" onclick="CopyToClipboard('tag3734');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag27229" onclick="CopyToClipboard('tag27229');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag12981" onclick="CopyToClipboard('tag12981');return false;" class="tag-decoration">v3-develop-v3.3.5</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/b04f65afde74b5cfffccb5f002a1244b13517a87" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29663758368" target="_blank">2026-07-18 22:36:34</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="whisparr" \
        -p 6969:6969 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="6969/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/whisparr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      whisparr:
        container_name: whisparr
        image: ghcr.io/hotio/whisparr
        ports:
          - "6969:6969"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=6969/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
