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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29943" onclick="CopyToClipboard('tag29943');return false;" class="tag-decoration">release</div><div id="tag20579" onclick="CopyToClipboard('tag20579');return false;" class="tag-decoration">release-490dba9</div><div id="tag10320" onclick="CopyToClipboard('tag10320');return false;" class="tag-decoration">release-8.5.1</div><div id="tag14618" onclick="CopyToClipboard('tag14618');return false;" class="tag-decoration">release-v8</div><div id="tag8991" onclick="CopyToClipboard('tag8991');return false;" class="tag-decoration">release-v8.5</div><div id="tag6709" onclick="CopyToClipboard('tag6709');return false;" class="tag-decoration">release-v8.5.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/490dba96881850cbe362d85189ccd9d25939ab15" target="_blank">Upstream update: noblevpn-b1148ef => noblevpn-f921142</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/22118117643" target="_blank">2026-02-17 22:24:03</a></td></tr>
<tr><td><div id="tag13866" onclick="CopyToClipboard('tag13866');return false;" class="tag-decoration">testing</div><div id="tag29331" onclick="CopyToClipboard('tag29331');return false;" class="tag-decoration">testing-75f264a</div><div id="tag13559" onclick="CopyToClipboard('tag13559');return false;" class="tag-decoration">testing-8.5.1</div><div id="tag20179" onclick="CopyToClipboard('tag20179');return false;" class="tag-decoration">testing-v8</div><div id="tag24768" onclick="CopyToClipboard('tag24768');return false;" class="tag-decoration">testing-v8.5</div><div id="tag27668" onclick="CopyToClipboard('tag27668');return false;" class="tag-decoration">testing-v8.5.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/75f264a1aea9b9dc8242632cd358c91c97a07e8c" target="_blank">Version update: 8.5.0 => 8.5.1</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/22019943842" target="_blank">2026-02-14 15:36:24</a></td></tr>
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
