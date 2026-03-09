---
hide:
  - toc
title: hotio/jackett
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/jackett){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/jackett){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/jackett/jackett){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag23193" onclick="CopyToClipboard('tag23193');return false;" class="tag-decoration">release</div><div id="tag7593" onclick="CopyToClipboard('tag7593');return false;" class="tag-decoration">release-6c4b31f</div><div id="tag21173" onclick="CopyToClipboard('tag21173');return false;" class="tag-decoration">release-0.24.1323</div><div id="tag15442" onclick="CopyToClipboard('tag15442');return false;" class="tag-decoration">release-v0</div><div id="tag14985" onclick="CopyToClipboard('tag14985');return false;" class="tag-decoration">release-v0.24</div><div id="tag31386" onclick="CopyToClipboard('tag31386');return false;" class="tag-decoration">release-v0.24.1323</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/6c4b31f38e7956c331ec42cf5d31dc6dd4ad385f" target="_blank">Version update: 0.24.1316 => 0.24.1323</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/22840559567" target="_blank">2026-03-09 06:02:48</a></td></tr>
<tr><td><div id="tag29974" onclick="CopyToClipboard('tag29974');return false;" class="tag-decoration">testing</div><div id="tag1034" onclick="CopyToClipboard('tag1034');return false;" class="tag-decoration">testing-fa867fb</div><div id="tag25007" onclick="CopyToClipboard('tag25007');return false;" class="tag-decoration">testing-0.24.1323</div><div id="tag3986" onclick="CopyToClipboard('tag3986');return false;" class="tag-decoration">testing-v0</div><div id="tag25376" onclick="CopyToClipboard('tag25376');return false;" class="tag-decoration">testing-v0.24</div><div id="tag30521" onclick="CopyToClipboard('tag30521');return false;" class="tag-decoration">testing-v0.24.1323</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/fa867fb6d60c92a9c2999fb141a3b72d592cfd0a" target="_blank">Version update: 0.24.1316 => 0.24.1323</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/22840560388" target="_blank">2026-03-09 06:02:50</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="jackett" \
        -p 9117:9117 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9117/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/jackett
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      jackett:
        container_name: jackett
        image: ghcr.io/hotio/jackett
        ports:
          - "9117:9117"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9117/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
