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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30211" onclick="CopyToClipboard('tag30211');return false;" class="tag-decoration">v2</div><div id="tag13400" onclick="CopyToClipboard('tag13400');return false;" class="tag-decoration">v2-9422f24</div><div id="tag30700" onclick="CopyToClipboard('tag30700');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag2722" onclick="CopyToClipboard('tag2722');return false;" class="tag-decoration">v2-v2</div><div id="tag13395" onclick="CopyToClipboard('tag13395');return false;" class="tag-decoration">v2-v2.2</div><div id="tag18868" onclick="CopyToClipboard('tag18868');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/9422f2405e40a0ac77d1ae1ebe8665f01e1d87b8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29322801194" target="_blank">2026-07-14 09:44:03</a></td></tr>
<tr><td><div id="tag18798" onclick="CopyToClipboard('tag18798');return false;" class="tag-decoration">v2-develop</div><div id="tag29974" onclick="CopyToClipboard('tag29974');return false;" class="tag-decoration">v2-develop-ecc443e</div><div id="tag10340" onclick="CopyToClipboard('tag10340');return false;" class="tag-decoration">v2-develop-2.2.0-develop.141</div><div id="tag28693" onclick="CopyToClipboard('tag28693');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag7910" onclick="CopyToClipboard('tag7910');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag5280" onclick="CopyToClipboard('tag5280');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/ecc443e1429bf2edf2d71e2868f960ab9424d0f4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29313202597" target="_blank">2026-07-14 07:01:43</a></td></tr>
<tr><td><div id="tag31097" onclick="CopyToClipboard('tag31097');return false;" class="tag-decoration">v3</div><div id="tag31851" onclick="CopyToClipboard('tag31851');return false;" class="tag-decoration">v3-96c927c</div><div id="tag3358" onclick="CopyToClipboard('tag3358');return false;" class="tag-decoration">v3-3.3.4-release.794</div><div id="tag22287" onclick="CopyToClipboard('tag22287');return false;" class="tag-decoration">v3-v3</div><div id="tag6138" onclick="CopyToClipboard('tag6138');return false;" class="tag-decoration">v3-v3.3</div><div id="tag20130" onclick="CopyToClipboard('tag20130');return false;" class="tag-decoration">v3-v3.3.4</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/96c927c999444dcf3e635c4d14a11fabf4836ba2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29322796800" target="_blank">2026-07-14 09:43:58</a></td></tr>
<tr><td><div id="tag27912" onclick="CopyToClipboard('tag27912');return false;" class="tag-decoration">v3-develop</div><div id="tag27693" onclick="CopyToClipboard('tag27693');return false;" class="tag-decoration">v3-develop-1fe24a7</div><div id="tag7369" onclick="CopyToClipboard('tag7369');return false;" class="tag-decoration">v3-develop-3.3.4-develop.808</div><div id="tag18994" onclick="CopyToClipboard('tag18994');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag2686" onclick="CopyToClipboard('tag2686');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag10187" onclick="CopyToClipboard('tag10187');return false;" class="tag-decoration">v3-develop-v3.3.4</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/1fe24a7eeac6d1d326d33796a187ee07348e87eb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29322801683" target="_blank">2026-07-14 09:44:03</a></td></tr>
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
