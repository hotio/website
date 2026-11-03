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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31737" onclick="CopyToClipboard('tag31737');return false;" class="tag-decoration">release</div><div id="tag29597" onclick="CopyToClipboard('tag29597');return false;" class="tag-decoration">release-a120619</div><div id="tag26248" onclick="CopyToClipboard('tag26248');return false;" class="tag-decoration">release-9.2.0</div><div id="tag7054" onclick="CopyToClipboard('tag7054');return false;" class="tag-decoration">release-v9</div><div id="tag3956" onclick="CopyToClipboard('tag3956');return false;" class="tag-decoration">release-v9.2</div><div id="tag19568" onclick="CopyToClipboard('tag19568');return false;" class="tag-decoration">release-v9.2.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/a120619f04edfe05ce2f6c4fa545b084659c66cd" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/41734853534" target="_blank">2026-11-03 22:54:52</a></td></tr>
<tr><td><div id="tag16810" onclick="CopyToClipboard('tag16810');return false;" class="tag-decoration">testing</div><div id="tag23852" onclick="CopyToClipboard('tag23852');return false;" class="tag-decoration">testing-2d2ac6a</div><div id="tag16272" onclick="CopyToClipboard('tag16272');return false;" class="tag-decoration">testing-9.2.0</div><div id="tag7191" onclick="CopyToClipboard('tag7191');return false;" class="tag-decoration">testing-v9</div><div id="tag14605" onclick="CopyToClipboard('tag14605');return false;" class="tag-decoration">testing-v9.2</div><div id="tag7016" onclick="CopyToClipboard('tag7016');return false;" class="tag-decoration">testing-v9.2.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/2d2ac6a915cca48e65bb4279d4081aea04682b64" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/40672549904" target="_blank">2026-10-28 10:29:35</a></td></tr>
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
