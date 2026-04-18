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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag19717" onclick="CopyToClipboard('tag19717');return false;" class="tag-decoration">release</div><div id="tag6106" onclick="CopyToClipboard('tag6106');return false;" class="tag-decoration">release-04c52d8</div><div id="tag12771" onclick="CopyToClipboard('tag12771');return false;" class="tag-decoration">release-8.6.0</div><div id="tag9109" onclick="CopyToClipboard('tag9109');return false;" class="tag-decoration">release-v8</div><div id="tag23460" onclick="CopyToClipboard('tag23460');return false;" class="tag-decoration">release-v8.6</div><div id="tag2253" onclick="CopyToClipboard('tag2253');return false;" class="tag-decoration">release-v8.6.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/04c52d882a28b10e798ff6bdcb7b9df389409b23" target="_blank">Version update: 8.5.4 => 8.6.0</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/24601391550" target="_blank">2026-04-18 09:05:39</a></td></tr>
<tr><td><div id="tag17507" onclick="CopyToClipboard('tag17507');return false;" class="tag-decoration">testing</div><div id="tag21633" onclick="CopyToClipboard('tag21633');return false;" class="tag-decoration">testing-55e0b72</div><div id="tag7234" onclick="CopyToClipboard('tag7234');return false;" class="tag-decoration">testing-8.5.4</div><div id="tag18679" onclick="CopyToClipboard('tag18679');return false;" class="tag-decoration">testing-v8</div><div id="tag9745" onclick="CopyToClipboard('tag9745');return false;" class="tag-decoration">testing-v8.5</div><div id="tag16618" onclick="CopyToClipboard('tag16618');return false;" class="tag-decoration">testing-v8.5.4</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/55e0b72fad9a70024f3b728bf9ea1ea45facc020" target="_blank">Upstream update: noblevpn-cba64e8 => noblevpn-441eaee</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/24483895684" target="_blank">2026-04-15 23:36:20</a></td></tr>
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
