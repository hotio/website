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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4851" onclick="CopyToClipboard('tag4851');return false;" class="tag-decoration">release</div><div id="tag3196" onclick="CopyToClipboard('tag3196');return false;" class="tag-decoration">release-fa320a0</div><div id="tag4407" onclick="CopyToClipboard('tag4407');return false;" class="tag-decoration">release-0.24.1375</div><div id="tag29299" onclick="CopyToClipboard('tag29299');return false;" class="tag-decoration">release-v0</div><div id="tag11931" onclick="CopyToClipboard('tag11931');return false;" class="tag-decoration">release-v0.24</div><div id="tag5920" onclick="CopyToClipboard('tag5920');return false;" class="tag-decoration">release-v0.24.1375</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/fa320a036e35527ca8e5ff90876249849c05a15e" target="_blank">Version update: 0.24.1368 => 0.24.1375</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/23105081015" target="_blank">2026-03-15 06:33:58</a></td></tr>
<tr><td><div id="tag8695" onclick="CopyToClipboard('tag8695');return false;" class="tag-decoration">testing</div><div id="tag30588" onclick="CopyToClipboard('tag30588');return false;" class="tag-decoration">testing-1c10435</div><div id="tag9690" onclick="CopyToClipboard('tag9690');return false;" class="tag-decoration">testing-0.24.1385</div><div id="tag24349" onclick="CopyToClipboard('tag24349');return false;" class="tag-decoration">testing-v0</div><div id="tag21462" onclick="CopyToClipboard('tag21462');return false;" class="tag-decoration">testing-v0.24</div><div id="tag13269" onclick="CopyToClipboard('tag13269');return false;" class="tag-decoration">testing-v0.24.1385</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/1c104356c6ec7adb7c4c4ce94a3d43f19ec2bad3" target="_blank">Version update: 0.24.1375 => 0.24.1385</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/23131766774" target="_blank">2026-03-16 07:00:08</a></td></tr>
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
