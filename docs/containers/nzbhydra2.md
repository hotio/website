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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24117" onclick="CopyToClipboard('tag24117');return false;" class="tag-decoration">release</div><div id="tag23438" onclick="CopyToClipboard('tag23438');return false;" class="tag-decoration">release-a5dd3ad</div><div id="tag7873" onclick="CopyToClipboard('tag7873');return false;" class="tag-decoration">release-8.9.0</div><div id="tag8730" onclick="CopyToClipboard('tag8730');return false;" class="tag-decoration">release-v8</div><div id="tag30877" onclick="CopyToClipboard('tag30877');return false;" class="tag-decoration">release-v8.9</div><div id="tag5403" onclick="CopyToClipboard('tag5403');return false;" class="tag-decoration">release-v8.9.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/a5dd3ad4388e83c7bf5646622f6b7ca4f30ebd57" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/35099928589" target="_blank">2026-09-16 13:07:30</a></td></tr>
<tr><td><div id="tag24718" onclick="CopyToClipboard('tag24718');return false;" class="tag-decoration">testing</div><div id="tag16316" onclick="CopyToClipboard('tag16316');return false;" class="tag-decoration">testing-fd5d4d3</div><div id="tag29099" onclick="CopyToClipboard('tag29099');return false;" class="tag-decoration">testing-8.9.0</div><div id="tag5154" onclick="CopyToClipboard('tag5154');return false;" class="tag-decoration">testing-v8</div><div id="tag30587" onclick="CopyToClipboard('tag30587');return false;" class="tag-decoration">testing-v8.9</div><div id="tag27517" onclick="CopyToClipboard('tag27517');return false;" class="tag-decoration">testing-v8.9.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/fd5d4d3fe09bad984428cfdfa909f2e17e7861a8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/35099944430" target="_blank">2026-09-16 13:07:36</a></td></tr>
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
