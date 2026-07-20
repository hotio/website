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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27876" onclick="CopyToClipboard('tag27876');return false;" class="tag-decoration">release</div><div id="tag29396" onclick="CopyToClipboard('tag29396');return false;" class="tag-decoration">release-320bf02</div><div id="tag4862" onclick="CopyToClipboard('tag4862');return false;" class="tag-decoration">release-0.24.2246</div><div id="tag25721" onclick="CopyToClipboard('tag25721');return false;" class="tag-decoration">release-v0</div><div id="tag29992" onclick="CopyToClipboard('tag29992');return false;" class="tag-decoration">release-v0.24</div><div id="tag29612" onclick="CopyToClipboard('tag29612');return false;" class="tag-decoration">release-v0.24.2246</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/320bf02c963e108dcf932f19cba2610142e411ac" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/29720820291" target="_blank">2026-07-20 06:08:37</a></td></tr>
<tr><td><div id="tag32723" onclick="CopyToClipboard('tag32723');return false;" class="tag-decoration">testing</div><div id="tag20864" onclick="CopyToClipboard('tag20864');return false;" class="tag-decoration">testing-9e1ad91</div><div id="tag1393" onclick="CopyToClipboard('tag1393');return false;" class="tag-decoration">testing-0.24.2246</div><div id="tag2395" onclick="CopyToClipboard('tag2395');return false;" class="tag-decoration">testing-v0</div><div id="tag9973" onclick="CopyToClipboard('tag9973');return false;" class="tag-decoration">testing-v0.24</div><div id="tag9646" onclick="CopyToClipboard('tag9646');return false;" class="tag-decoration">testing-v0.24.2246</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/9e1ad91e9d89a579da605c59f67f0eeffcf5d809" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/29720790681" target="_blank">2026-07-20 06:07:55</a></td></tr>
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
