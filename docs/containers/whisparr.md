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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1525" onclick="CopyToClipboard('tag1525');return false;" class="tag-decoration">v2</div><div id="tag24539" onclick="CopyToClipboard('tag24539');return false;" class="tag-decoration">v2-7521c04</div><div id="tag13269" onclick="CopyToClipboard('tag13269');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag2450" onclick="CopyToClipboard('tag2450');return false;" class="tag-decoration">v2-v2</div><div id="tag14249" onclick="CopyToClipboard('tag14249');return false;" class="tag-decoration">v2-v2.2</div><div id="tag15340" onclick="CopyToClipboard('tag15340');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/7521c04f7664e1015d5d821dabc467611f4e9972" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32922172201" target="_blank">2026-08-26 02:17:25</a></td></tr>
<tr><td><div id="tag18511" onclick="CopyToClipboard('tag18511');return false;" class="tag-decoration">v2-develop</div><div id="tag28738" onclick="CopyToClipboard('tag28738');return false;" class="tag-decoration">v2-develop-6d8ef45</div><div id="tag16004" onclick="CopyToClipboard('tag16004');return false;" class="tag-decoration">v2-develop-2.2.0-develop.198</div><div id="tag13407" onclick="CopyToClipboard('tag13407');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag29593" onclick="CopyToClipboard('tag29593');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag27386" onclick="CopyToClipboard('tag27386');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/6d8ef4525bcfc34049941775db0094351af42fcc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32922181221" target="_blank">2026-08-26 02:17:33</a></td></tr>
<tr><td><div id="tag21081" onclick="CopyToClipboard('tag21081');return false;" class="tag-decoration">v3</div><div id="tag14810" onclick="CopyToClipboard('tag14810');return false;" class="tag-decoration">v3-a4156d8</div><div id="tag8520" onclick="CopyToClipboard('tag8520');return false;" class="tag-decoration">v3-3.3.8-release.1097</div><div id="tag10086" onclick="CopyToClipboard('tag10086');return false;" class="tag-decoration">v3-v3</div><div id="tag10736" onclick="CopyToClipboard('tag10736');return false;" class="tag-decoration">v3-v3.3</div><div id="tag17102" onclick="CopyToClipboard('tag17102');return false;" class="tag-decoration">v3-v3.3.8</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/a4156d85a5af45e8b8d5e970e8895eec847eb647" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32922172838" target="_blank">2026-08-26 02:17:25</a></td></tr>
<tr><td><div id="tag19693" onclick="CopyToClipboard('tag19693');return false;" class="tag-decoration">v3-develop</div><div id="tag2152" onclick="CopyToClipboard('tag2152');return false;" class="tag-decoration">v3-develop-d5dc06b</div><div id="tag28139" onclick="CopyToClipboard('tag28139');return false;" class="tag-decoration">v3-develop-3.3.9-develop.1279</div><div id="tag32267" onclick="CopyToClipboard('tag32267');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag1547" onclick="CopyToClipboard('tag1547');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag8416" onclick="CopyToClipboard('tag8416');return false;" class="tag-decoration">v3-develop-v3.3.9</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/d5dc06b0ee4062c66e3f710becc35249dbfa3a4c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32889131917" target="_blank">2026-08-25 19:21:37</a></td></tr>
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
