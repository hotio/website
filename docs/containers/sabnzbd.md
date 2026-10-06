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
<tr><td><div id="tag27701" onclick="CopyToClipboard('tag27701');return false;" class="tag-decoration">nightly</div><div id="tag23310" onclick="CopyToClipboard('tag23310');return false;" class="tag-decoration">nightly-3c5cf7e</div><div id="tag17119" onclick="CopyToClipboard('tag17119');return false;" class="tag-decoration">nightly-0ca3664ab72607829b5ffe13add8be7274be7d81</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/3c5cf7eafd5c8884675d6fba8942c60ebf95b85d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/37416248688" target="_blank">2026-10-06 04:58:30</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2520" onclick="CopyToClipboard('tag2520');return false;" class="tag-decoration">release</div><div id="tag29917" onclick="CopyToClipboard('tag29917');return false;" class="tag-decoration">release-47c4866</div><div id="tag31699" onclick="CopyToClipboard('tag31699');return false;" class="tag-decoration">release-5.1.3</div><div id="tag220" onclick="CopyToClipboard('tag220');return false;" class="tag-decoration">release-v5</div><div id="tag23592" onclick="CopyToClipboard('tag23592');return false;" class="tag-decoration">release-v5.1</div><div id="tag17284" onclick="CopyToClipboard('tag17284');return false;" class="tag-decoration">release-v5.1.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/47c486615a836acddfb4d206c8ce42627c43899c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/36903970174" target="_blank">2026-10-01 18:03:20</a></td></tr>
<tr><td><div id="tag6451" onclick="CopyToClipboard('tag6451');return false;" class="tag-decoration">testing</div><div id="tag25482" onclick="CopyToClipboard('tag25482');return false;" class="tag-decoration">testing-281bf57</div><div id="tag31469" onclick="CopyToClipboard('tag31469');return false;" class="tag-decoration">testing-5.2.0Beta1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/281bf57678311d97ab09ca4dfd2bea23d7589e72" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/36903963495" target="_blank">2026-10-01 18:03:16</a></td></tr>
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
