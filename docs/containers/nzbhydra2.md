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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7195" onclick="CopyToClipboard('tag7195');return false;" class="tag-decoration">release</div><div id="tag13294" onclick="CopyToClipboard('tag13294');return false;" class="tag-decoration">release-f73ad11</div><div id="tag7208" onclick="CopyToClipboard('tag7208');return false;" class="tag-decoration">release-8.3.0</div><div id="tag4614" onclick="CopyToClipboard('tag4614');return false;" class="tag-decoration">release-v8</div><div id="tag13513" onclick="CopyToClipboard('tag13513');return false;" class="tag-decoration">release-v8.3</div><div id="tag30055" onclick="CopyToClipboard('tag30055');return false;" class="tag-decoration">release-v8.3.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/f73ad11a485c6e01bbd6a2a2f990626aabd779cf" target="_blank">Upstream update: noblevpn-8ba830a => noblevpn-b1148ef</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/21428850191" target="_blank">2026-01-28 07:14:43</a></td></tr>
<tr><td><div id="tag6833" onclick="CopyToClipboard('tag6833');return false;" class="tag-decoration">testing</div><div id="tag14841" onclick="CopyToClipboard('tag14841');return false;" class="tag-decoration">testing-1964e3e</div><div id="tag25025" onclick="CopyToClipboard('tag25025');return false;" class="tag-decoration">testing-8.3.0</div><div id="tag17437" onclick="CopyToClipboard('tag17437');return false;" class="tag-decoration">testing-v8</div><div id="tag25345" onclick="CopyToClipboard('tag25345');return false;" class="tag-decoration">testing-v8.3</div><div id="tag32045" onclick="CopyToClipboard('tag32045');return false;" class="tag-decoration">testing-v8.3.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/1964e3e48a583f18a09d64cf33fb3afd7ceafbba" target="_blank">Upstream update: noblevpn-aac85c0 => noblevpn-8ba830a</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/21354169715" target="_blank">2026-01-26 10:20:30</a></td></tr>
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
