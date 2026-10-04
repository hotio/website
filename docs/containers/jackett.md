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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24356" onclick="CopyToClipboard('tag24356');return false;" class="tag-decoration">release</div><div id="tag27211" onclick="CopyToClipboard('tag27211');return false;" class="tag-decoration">release-d4df125</div><div id="tag22738" onclick="CopyToClipboard('tag22738');return false;" class="tag-decoration">release-0.24.2780</div><div id="tag4445" onclick="CopyToClipboard('tag4445');return false;" class="tag-decoration">release-v0</div><div id="tag32735" onclick="CopyToClipboard('tag32735');return false;" class="tag-decoration">release-v0.24</div><div id="tag17027" onclick="CopyToClipboard('tag17027');return false;" class="tag-decoration">release-v0.24.2780</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/d4df1257408977883c434a62ba727e2e912f1ae2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/37117896239" target="_blank">2026-10-03 10:53:46</a></td></tr>
<tr><td><div id="tag27824" onclick="CopyToClipboard('tag27824');return false;" class="tag-decoration">testing</div><div id="tag5041" onclick="CopyToClipboard('tag5041');return false;" class="tag-decoration">testing-603b7b3</div><div id="tag29153" onclick="CopyToClipboard('tag29153');return false;" class="tag-decoration">testing-0.24.2788</div><div id="tag10699" onclick="CopyToClipboard('tag10699');return false;" class="tag-decoration">testing-v0</div><div id="tag24002" onclick="CopyToClipboard('tag24002');return false;" class="tag-decoration">testing-v0.24</div><div id="tag7375" onclick="CopyToClipboard('tag7375');return false;" class="tag-decoration">testing-v0.24.2788</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/603b7b3eddfe9c75fdce0758091c44d9be0288f6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/37183133870" target="_blank">2026-10-04 06:33:03</a></td></tr>
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
