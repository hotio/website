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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag23644" onclick="CopyToClipboard('tag23644');return false;" class="tag-decoration">v2</div><div id="tag27142" onclick="CopyToClipboard('tag27142');return false;" class="tag-decoration">v2-abbdf6a</div><div id="tag5593" onclick="CopyToClipboard('tag5593');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag19435" onclick="CopyToClipboard('tag19435');return false;" class="tag-decoration">v2-v2</div><div id="tag17288" onclick="CopyToClipboard('tag17288');return false;" class="tag-decoration">v2-v2.2</div><div id="tag25864" onclick="CopyToClipboard('tag25864');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/abbdf6adaec2f890b128d02e02ae2ae2af58d889" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25988087564" target="_blank">2026-05-17 10:16:41</a></td></tr>
<tr><td><div id="tag27868" onclick="CopyToClipboard('tag27868');return false;" class="tag-decoration">v2-develop</div><div id="tag4163" onclick="CopyToClipboard('tag4163');return false;" class="tag-decoration">v2-develop-076c1fc</div><div id="tag8391" onclick="CopyToClipboard('tag8391');return false;" class="tag-decoration">v2-develop-2.2.0-develop.115</div><div id="tag14976" onclick="CopyToClipboard('tag14976');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag31517" onclick="CopyToClipboard('tag31517');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag18272" onclick="CopyToClipboard('tag18272');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/076c1fceec6f30576b12e8823ad85b098a7d3a11" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25988087943" target="_blank">2026-05-17 10:16:42</a></td></tr>
<tr><td><div id="tag1547" onclick="CopyToClipboard('tag1547');return false;" class="tag-decoration">v3</div><div id="tag1839" onclick="CopyToClipboard('tag1839');return false;" class="tag-decoration">v3-a468baa</div><div id="tag5304" onclick="CopyToClipboard('tag5304');return false;" class="tag-decoration">v3-3.3.3-release.683</div><div id="tag10111" onclick="CopyToClipboard('tag10111');return false;" class="tag-decoration">v3-v3</div><div id="tag14038" onclick="CopyToClipboard('tag14038');return false;" class="tag-decoration">v3-v3.3</div><div id="tag17840" onclick="CopyToClipboard('tag17840');return false;" class="tag-decoration">v3-v3.3.3</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/a468baab1ae75ae7d797f0eadd79c98d67fe15cd" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25931442785" target="_blank">2026-05-15 17:20:24</a></td></tr>
<tr><td><div id="tag12635" onclick="CopyToClipboard('tag12635');return false;" class="tag-decoration">v3-develop</div><div id="tag24290" onclick="CopyToClipboard('tag24290');return false;" class="tag-decoration">v3-develop-4e32145</div><div id="tag28206" onclick="CopyToClipboard('tag28206');return false;" class="tag-decoration">v3-develop-3.3.3-develop.736</div><div id="tag27210" onclick="CopyToClipboard('tag27210');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag13290" onclick="CopyToClipboard('tag13290');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag32345" onclick="CopyToClipboard('tag32345');return false;" class="tag-decoration">v3-develop-v3.3.3</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/4e32145a0d008bda8d2e7dae0c04813241e87f3d" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25988088066" target="_blank">2026-05-17 10:16:42</a></td></tr>
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
