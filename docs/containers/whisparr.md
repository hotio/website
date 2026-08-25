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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21648" onclick="CopyToClipboard('tag21648');return false;" class="tag-decoration">v2</div><div id="tag730" onclick="CopyToClipboard('tag730');return false;" class="tag-decoration">v2-ac34fb9</div><div id="tag29529" onclick="CopyToClipboard('tag29529');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag29258" onclick="CopyToClipboard('tag29258');return false;" class="tag-decoration">v2-v2</div><div id="tag27831" onclick="CopyToClipboard('tag27831');return false;" class="tag-decoration">v2-v2.2</div><div id="tag30975" onclick="CopyToClipboard('tag30975');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/ac34fb9bdcd5c926168c159710c7cc1119832512" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32328861501" target="_blank">2026-08-20 03:36:45</a></td></tr>
<tr><td><div id="tag21641" onclick="CopyToClipboard('tag21641');return false;" class="tag-decoration">v2-develop</div><div id="tag884" onclick="CopyToClipboard('tag884');return false;" class="tag-decoration">v2-develop-ae98421</div><div id="tag32029" onclick="CopyToClipboard('tag32029');return false;" class="tag-decoration">v2-develop-2.2.0-develop.175</div><div id="tag28704" onclick="CopyToClipboard('tag28704');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag30105" onclick="CopyToClipboard('tag30105');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag13666" onclick="CopyToClipboard('tag13666');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/ae98421067801fad1dab9aff93fe86b0828c8660" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32883296386" target="_blank">2026-08-25 18:21:38</a></td></tr>
<tr><td><div id="tag2250" onclick="CopyToClipboard('tag2250');return false;" class="tag-decoration">v3</div><div id="tag28541" onclick="CopyToClipboard('tag28541');return false;" class="tag-decoration">v3-edb7863</div><div id="tag15045" onclick="CopyToClipboard('tag15045');return false;" class="tag-decoration">v3-3.3.8-release.1097</div><div id="tag24283" onclick="CopyToClipboard('tag24283');return false;" class="tag-decoration">v3-v3</div><div id="tag9632" onclick="CopyToClipboard('tag9632');return false;" class="tag-decoration">v3-v3.3</div><div id="tag9200" onclick="CopyToClipboard('tag9200');return false;" class="tag-decoration">v3-v3.3.8</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/edb7863d4413fbd2f1146b1b486ad20f46567325" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32328857936" target="_blank">2026-08-20 03:36:42</a></td></tr>
<tr><td><div id="tag28999" onclick="CopyToClipboard('tag28999');return false;" class="tag-decoration">v3-develop</div><div id="tag32449" onclick="CopyToClipboard('tag32449');return false;" class="tag-decoration">v3-develop-d5dc06b</div><div id="tag8375" onclick="CopyToClipboard('tag8375');return false;" class="tag-decoration">v3-develop-3.3.9-develop.1279</div><div id="tag932" onclick="CopyToClipboard('tag932');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag30137" onclick="CopyToClipboard('tag30137');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag26103" onclick="CopyToClipboard('tag26103');return false;" class="tag-decoration">v3-develop-v3.3.9</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/d5dc06b0ee4062c66e3f710becc35249dbfa3a4c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32889131917" target="_blank">2026-08-25 19:21:37</a></td></tr>
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
