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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag20982" onclick="CopyToClipboard('tag20982');return false;" class="tag-decoration">release</div><div id="tag27430" onclick="CopyToClipboard('tag27430');return false;" class="tag-decoration">release-d01ff92</div><div id="tag22608" onclick="CopyToClipboard('tag22608');return false;" class="tag-decoration">release-8.2.3</div><div id="tag25141" onclick="CopyToClipboard('tag25141');return false;" class="tag-decoration">release-v8</div><div id="tag8689" onclick="CopyToClipboard('tag8689');return false;" class="tag-decoration">release-v8.2</div><div id="tag21346" onclick="CopyToClipboard('tag21346');return false;" class="tag-decoration">release-v8.2.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/d01ff9218bb4dba6a8138fc6899a39197d062b08" target="_blank">Upstream update: noblevpn-23d46d5 => noblevpn-ea653c4</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/21060542002" target="_blank">2026-01-16 08:33:38</a></td></tr>
<tr><td><div id="tag8897" onclick="CopyToClipboard('tag8897');return false;" class="tag-decoration">testing</div><div id="tag4785" onclick="CopyToClipboard('tag4785');return false;" class="tag-decoration">testing-adbea91</div><div id="tag29005" onclick="CopyToClipboard('tag29005');return false;" class="tag-decoration">testing-8.2.3</div><div id="tag17768" onclick="CopyToClipboard('tag17768');return false;" class="tag-decoration">testing-v8</div><div id="tag15160" onclick="CopyToClipboard('tag15160');return false;" class="tag-decoration">testing-v8.2</div><div id="tag26055" onclick="CopyToClipboard('tag26055');return false;" class="tag-decoration">testing-v8.2.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/adbea91c634320182160560869b89519ac9d63a9" target="_blank">Upstream update: noblevpn-23d46d5 => noblevpn-ea653c4</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/21060542463" target="_blank">2026-01-16 08:33:39</a></td></tr>
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
