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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26057" onclick="CopyToClipboard('tag26057');return false;" class="tag-decoration">release</div><div id="tag29816" onclick="CopyToClipboard('tag29816');return false;" class="tag-decoration">release-25847c8</div><div id="tag11868" onclick="CopyToClipboard('tag11868');return false;" class="tag-decoration">release-0.24.1027</div><div id="tag30296" onclick="CopyToClipboard('tag30296');return false;" class="tag-decoration">release-v0</div><div id="tag1711" onclick="CopyToClipboard('tag1711');return false;" class="tag-decoration">release-v0.24</div><div id="tag4276" onclick="CopyToClipboard('tag4276');return false;" class="tag-decoration">release-v0.24.1027</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/25847c8c9a62311bd3f36a00afe45076947e1dad" target="_blank">Version update: 0.24.1019 => 0.24.1027</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21661847929" target="_blank">2026-02-04 06:59:28</a></td></tr>
<tr><td><div id="tag24495" onclick="CopyToClipboard('tag24495');return false;" class="tag-decoration">testing</div><div id="tag78" onclick="CopyToClipboard('tag78');return false;" class="tag-decoration">testing-dd7e398</div><div id="tag3522" onclick="CopyToClipboard('tag3522');return false;" class="tag-decoration">testing-0.24.1027</div><div id="tag7460" onclick="CopyToClipboard('tag7460');return false;" class="tag-decoration">testing-v0</div><div id="tag23193" onclick="CopyToClipboard('tag23193');return false;" class="tag-decoration">testing-v0.24</div><div id="tag1558" onclick="CopyToClipboard('tag1558');return false;" class="tag-decoration">testing-v0.24.1027</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/dd7e398f01c30d1c01c89b3c1d07890124c4dc21" target="_blank">Version update: 0.24.1019 => 0.24.1027</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21661848597" target="_blank">2026-02-04 06:59:31</a></td></tr>
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
