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
<tr><td><div id="tag6605" onclick="CopyToClipboard('tag6605');return false;" class="tag-decoration">nightly</div><div id="tag11084" onclick="CopyToClipboard('tag11084');return false;" class="tag-decoration">nightly-e4f60f0</div><div id="tag19421" onclick="CopyToClipboard('tag19421');return false;" class="tag-decoration">nightly-0ca3664ab72607829b5ffe13add8be7274be7d81</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/e4f60f08e22bb0ec02e7d57d93bf7d3acd47e0cd" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/37390330511" target="_blank">2026-10-05 23:45:43</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag19663" onclick="CopyToClipboard('tag19663');return false;" class="tag-decoration">release</div><div id="tag13788" onclick="CopyToClipboard('tag13788');return false;" class="tag-decoration">release-47c4866</div><div id="tag9421" onclick="CopyToClipboard('tag9421');return false;" class="tag-decoration">release-5.1.3</div><div id="tag4958" onclick="CopyToClipboard('tag4958');return false;" class="tag-decoration">release-v5</div><div id="tag26412" onclick="CopyToClipboard('tag26412');return false;" class="tag-decoration">release-v5.1</div><div id="tag948" onclick="CopyToClipboard('tag948');return false;" class="tag-decoration">release-v5.1.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/47c486615a836acddfb4d206c8ce42627c43899c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/36903970174" target="_blank">2026-10-01 18:03:20</a></td></tr>
<tr><td><div id="tag3829" onclick="CopyToClipboard('tag3829');return false;" class="tag-decoration">testing</div><div id="tag21965" onclick="CopyToClipboard('tag21965');return false;" class="tag-decoration">testing-281bf57</div><div id="tag24055" onclick="CopyToClipboard('tag24055');return false;" class="tag-decoration">testing-5.2.0Beta1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/281bf57678311d97ab09ca4dfd2bea23d7589e72" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/36903963495" target="_blank">2026-10-01 18:03:16</a></td></tr>
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
