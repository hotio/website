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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag32486" onclick="CopyToClipboard('tag32486');return false;" class="tag-decoration">v2</div><div id="tag17592" onclick="CopyToClipboard('tag17592');return false;" class="tag-decoration">v2-b5a3836</div><div id="tag6959" onclick="CopyToClipboard('tag6959');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag17852" onclick="CopyToClipboard('tag17852');return false;" class="tag-decoration">v2-v2</div><div id="tag29284" onclick="CopyToClipboard('tag29284');return false;" class="tag-decoration">v2-v2.2</div><div id="tag31299" onclick="CopyToClipboard('tag31299');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/b5a3836c59570640cc17371cd28169ea305948a7" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29681497871" target="_blank">2026-07-19 09:23:37</a></td></tr>
<tr><td><div id="tag24115" onclick="CopyToClipboard('tag24115');return false;" class="tag-decoration">v2-develop</div><div id="tag3403" onclick="CopyToClipboard('tag3403');return false;" class="tag-decoration">v2-develop-a4ad935</div><div id="tag7746" onclick="CopyToClipboard('tag7746');return false;" class="tag-decoration">v2-develop-2.2.0-develop.141</div><div id="tag17440" onclick="CopyToClipboard('tag17440');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag7574" onclick="CopyToClipboard('tag7574');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag17128" onclick="CopyToClipboard('tag17128');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/a4ad93559ed1c47634e2271a61a1adb57bd3ecdc" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29681491856" target="_blank">2026-07-19 09:23:26</a></td></tr>
<tr><td><div id="tag8095" onclick="CopyToClipboard('tag8095');return false;" class="tag-decoration">v3</div><div id="tag21710" onclick="CopyToClipboard('tag21710');return false;" class="tag-decoration">v3-be17d29</div><div id="tag28484" onclick="CopyToClipboard('tag28484');return false;" class="tag-decoration">v3-3.3.4-release.794</div><div id="tag17623" onclick="CopyToClipboard('tag17623');return false;" class="tag-decoration">v3-v3</div><div id="tag31027" onclick="CopyToClipboard('tag31027');return false;" class="tag-decoration">v3-v3.3</div><div id="tag26215" onclick="CopyToClipboard('tag26215');return false;" class="tag-decoration">v3-v3.3.4</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/be17d29c400052915b1b18741e61dd7e6f4f625d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29356451636" target="_blank">2026-07-14 18:05:24</a></td></tr>
<tr><td><div id="tag12435" onclick="CopyToClipboard('tag12435');return false;" class="tag-decoration">v3-develop</div><div id="tag14562" onclick="CopyToClipboard('tag14562');return false;" class="tag-decoration">v3-develop-b04f65a</div><div id="tag21145" onclick="CopyToClipboard('tag21145');return false;" class="tag-decoration">v3-develop-3.3.5-develop.846</div><div id="tag14161" onclick="CopyToClipboard('tag14161');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag19250" onclick="CopyToClipboard('tag19250');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag29516" onclick="CopyToClipboard('tag29516');return false;" class="tag-decoration">v3-develop-v3.3.5</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/b04f65afde74b5cfffccb5f002a1244b13517a87" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29663758368" target="_blank">2026-07-18 22:36:34</a></td></tr>
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
