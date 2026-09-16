---
hide:
  - toc
title: hotio/nzbhydra2
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/theotherp/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13795" onclick="CopyToClipboard('tag13795');return false;" class="tag-decoration">release</div><div id="tag14725" onclick="CopyToClipboard('tag14725');return false;" class="tag-decoration">release-2d14503</div><div id="tag17114" onclick="CopyToClipboard('tag17114');return false;" class="tag-decoration">release-8.9.0</div><div id="tag20353" onclick="CopyToClipboard('tag20353');return false;" class="tag-decoration">release-v8</div><div id="tag12482" onclick="CopyToClipboard('tag12482');return false;" class="tag-decoration">release-v8.9</div><div id="tag13861" onclick="CopyToClipboard('tag13861');return false;" class="tag-decoration">release-v8.9.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/2d14503284591978f99dca62be25396e349520cd" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/34512176438" target="_blank">2026-09-10 18:05:21</a></td></tr>
<tr><td><div id="tag14775" onclick="CopyToClipboard('tag14775');return false;" class="tag-decoration">testing</div><div id="tag27646" onclick="CopyToClipboard('tag27646');return false;" class="tag-decoration">testing-fd5d4d3</div><div id="tag6154" onclick="CopyToClipboard('tag6154');return false;" class="tag-decoration">testing-8.9.0</div><div id="tag19424" onclick="CopyToClipboard('tag19424');return false;" class="tag-decoration">testing-v8</div><div id="tag17596" onclick="CopyToClipboard('tag17596');return false;" class="tag-decoration">testing-v8.9</div><div id="tag19514" onclick="CopyToClipboard('tag19514');return false;" class="tag-decoration">testing-v8.9.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/fd5d4d3fe09bad984428cfdfa909f2e17e7861a8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/35099944430" target="_blank">2026-09-16 13:07:36</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="nzbhydra2" \
        -p 5076:5076 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5076/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/nzbhydra2
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      nzbhydra2:
        container_name: nzbhydra2
        image: ghcr.io/hotio/nzbhydra2
        ports:
          - "5076:5076"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5076/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
