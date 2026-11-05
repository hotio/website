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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag23230" onclick="CopyToClipboard('tag23230');return false;" class="tag-decoration">v2</div><div id="tag20931" onclick="CopyToClipboard('tag20931');return false;" class="tag-decoration">v2-0c7568b</div><div id="tag1270" onclick="CopyToClipboard('tag1270');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag15113" onclick="CopyToClipboard('tag15113');return false;" class="tag-decoration">v2-v2</div><div id="tag21520" onclick="CopyToClipboard('tag21520');return false;" class="tag-decoration">v2-v2.2</div><div id="tag29121" onclick="CopyToClipboard('tag29121');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/0c7568ba6fd4d3584b9f419d4e6acc38b2487702" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/42059429907" target="_blank">2026-11-05 15:52:42</a></td></tr>
<tr><td><div id="tag11573" onclick="CopyToClipboard('tag11573');return false;" class="tag-decoration">v2-develop</div><div id="tag29905" onclick="CopyToClipboard('tag29905');return false;" class="tag-decoration">v2-develop-7c8ccf4</div><div id="tag19060" onclick="CopyToClipboard('tag19060');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag2126" onclick="CopyToClipboard('tag2126');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag24811" onclick="CopyToClipboard('tag24811');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag3107" onclick="CopyToClipboard('tag3107');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/7c8ccf4b5c73e09bf74eabfb2ace93630a382627" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/42059418662" target="_blank">2026-11-05 15:52:38</a></td></tr>
<tr><td><div id="tag27598" onclick="CopyToClipboard('tag27598');return false;" class="tag-decoration">v3</div><div id="tag29394" onclick="CopyToClipboard('tag29394');return false;" class="tag-decoration">v3-c103c08</div><div id="tag16492" onclick="CopyToClipboard('tag16492');return false;" class="tag-decoration">v3-3.6.5-release.1886</div><div id="tag5401" onclick="CopyToClipboard('tag5401');return false;" class="tag-decoration">v3-v3</div><div id="tag14593" onclick="CopyToClipboard('tag14593');return false;" class="tag-decoration">v3-v3.6</div><div id="tag16808" onclick="CopyToClipboard('tag16808');return false;" class="tag-decoration">v3-v3.6.5</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/c103c0888316c628a11fb7365d80f49d5095b9ee" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/41938242698" target="_blank">2026-11-05 00:01:47</a></td></tr>
<tr><td><div id="tag21173" onclick="CopyToClipboard('tag21173');return false;" class="tag-decoration">v3-develop</div><div id="tag20028" onclick="CopyToClipboard('tag20028');return false;" class="tag-decoration">v3-develop-280f620</div><div id="tag22297" onclick="CopyToClipboard('tag22297');return false;" class="tag-decoration">v3-develop-3.6.6-develop.1913</div><div id="tag16500" onclick="CopyToClipboard('tag16500');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag6523" onclick="CopyToClipboard('tag6523');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag21121" onclick="CopyToClipboard('tag21121');return false;" class="tag-decoration">v3-develop-v3.6.6</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/280f62058b3663bdd831edc8f466c3e99e6c334b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/41938236549" target="_blank">2026-11-05 00:01:44</a></td></tr>
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
