---
hide:
  - toc
title: hotio/sabnzbd
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/sabnzbd/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag2050" onclick="CopyToClipboard('tag2050');return false;" class="tag-decoration">nightly</div><div id="tag30738" onclick="CopyToClipboard('tag30738');return false;" class="tag-decoration">nightly-1accbfd</div><div id="tag15591" onclick="CopyToClipboard('tag15591');return false;" class="tag-decoration">nightly-4a999a19081b76cff813b1c0e13bfea2234f314a</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/1accbfd6e9a63dbb3ed0a5a08893775bcdb4dccc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/33585220461" target="_blank">2026-09-02 02:58:16</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29510" onclick="CopyToClipboard('tag29510');return false;" class="tag-decoration">release</div><div id="tag9113" onclick="CopyToClipboard('tag9113');return false;" class="tag-decoration">release-046c8b0</div><div id="tag29444" onclick="CopyToClipboard('tag29444');return false;" class="tag-decoration">release-5.1.2</div><div id="tag25659" onclick="CopyToClipboard('tag25659');return false;" class="tag-decoration">release-v5</div><div id="tag652" onclick="CopyToClipboard('tag652');return false;" class="tag-decoration">release-v5.1</div><div id="tag7666" onclick="CopyToClipboard('tag7666');return false;" class="tag-decoration">release-v5.1.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/046c8b035e4a2da1cefa78ad73397a220cde3876" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/33605402646" target="_blank">2026-09-02 07:48:06</a></td></tr>
<tr><td><div id="tag16052" onclick="CopyToClipboard('tag16052');return false;" class="tag-decoration">testing</div><div id="tag31278" onclick="CopyToClipboard('tag31278');return false;" class="tag-decoration">testing-e63a5b3</div><div id="tag24034" onclick="CopyToClipboard('tag24034');return false;" class="tag-decoration">testing-5.1.2</div><div id="tag18150" onclick="CopyToClipboard('tag18150');return false;" class="tag-decoration">testing-v5</div><div id="tag12878" onclick="CopyToClipboard('tag12878');return false;" class="tag-decoration">testing-v5.1</div><div id="tag29339" onclick="CopyToClipboard('tag29339');return false;" class="tag-decoration">testing-v5.1.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/e63a5b3c1a38a713c4187abd18a1b561ce60f241" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/33605398475" target="_blank">2026-09-02 07:48:03</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="sabnzbd" \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e WEBUI_PORTS="8080/tcp" \ #(3)!
        -e ARGS="" \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/sabnzbd
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      sabnzbd:
        container_name: sabnzbd
        image: ghcr.io/hotio/sabnzbd
        ports:
          - "8080:8080"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8080/tcp #(3)!
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
