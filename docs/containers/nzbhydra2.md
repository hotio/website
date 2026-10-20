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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag150" onclick="CopyToClipboard('tag150');return false;" class="tag-decoration">release</div><div id="tag27721" onclick="CopyToClipboard('tag27721');return false;" class="tag-decoration">release-a1f946d</div><div id="tag23609" onclick="CopyToClipboard('tag23609');return false;" class="tag-decoration">release-9.1.1</div><div id="tag6316" onclick="CopyToClipboard('tag6316');return false;" class="tag-decoration">release-v9</div><div id="tag23857" onclick="CopyToClipboard('tag23857');return false;" class="tag-decoration">release-v9.1</div><div id="tag9583" onclick="CopyToClipboard('tag9583');return false;" class="tag-decoration">release-v9.1.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/a1f946d4b0d2d638a4cd6b2093fa582768b3955a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/39505546123" target="_blank">2026-10-20 22:05:47</a></td></tr>
<tr><td><div id="tag298" onclick="CopyToClipboard('tag298');return false;" class="tag-decoration">testing</div><div id="tag25527" onclick="CopyToClipboard('tag25527');return false;" class="tag-decoration">testing-197bcca</div><div id="tag23424" onclick="CopyToClipboard('tag23424');return false;" class="tag-decoration">testing-9.1.1</div><div id="tag12245" onclick="CopyToClipboard('tag12245');return false;" class="tag-decoration">testing-v9</div><div id="tag29835" onclick="CopyToClipboard('tag29835');return false;" class="tag-decoration">testing-v9.1</div><div id="tag906" onclick="CopyToClipboard('tag906');return false;" class="tag-decoration">testing-v9.1.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/197bccaf80f83b36e1a67e6e7518e33df28c0c93" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/39505538713" target="_blank">2026-10-20 22:05:44</a></td></tr>
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
