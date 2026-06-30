---
hide:
  - toc
title: hotio/unpackerr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/unpackerr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/unpackerr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/davidnewhall/unpackerr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag18437" onclick="CopyToClipboard('tag18437');return false;" class="tag-decoration">nightly</div><div id="tag2551" onclick="CopyToClipboard('tag2551');return false;" class="tag-decoration">nightly-1e27860</div><div id="tag28112" onclick="CopyToClipboard('tag28112');return false;" class="tag-decoration">nightly-63dfd08d2d0bda3d59d92eb9778e2ccf59207bdd</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/1e27860dc02439fc50592fcb360c4d4f84aa614a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/28443603257" target="_blank">2026-06-30 12:16:46</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3012" onclick="CopyToClipboard('tag3012');return false;" class="tag-decoration">release</div><div id="tag15168" onclick="CopyToClipboard('tag15168');return false;" class="tag-decoration">release-204e5bd</div><div id="tag18737" onclick="CopyToClipboard('tag18737');return false;" class="tag-decoration">release-0.15.2</div><div id="tag5140" onclick="CopyToClipboard('tag5140');return false;" class="tag-decoration">release-v0</div><div id="tag28807" onclick="CopyToClipboard('tag28807');return false;" class="tag-decoration">release-v0.15</div><div id="tag5006" onclick="CopyToClipboard('tag5006');return false;" class="tag-decoration">release-v0.15.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/204e5bdde3f67bc9a580e5891ec868bcecc7c434" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/28443601175" target="_blank">2026-06-30 12:16:45</a></td></tr>
<tr><td><div id="tag17982" onclick="CopyToClipboard('tag17982');return false;" class="tag-decoration">testing</div><div id="tag29611" onclick="CopyToClipboard('tag29611');return false;" class="tag-decoration">testing-7213e99</div><div id="tag14350" onclick="CopyToClipboard('tag14350');return false;" class="tag-decoration">testing-0.15.2</div><div id="tag26383" onclick="CopyToClipboard('tag26383');return false;" class="tag-decoration">testing-v0</div><div id="tag24937" onclick="CopyToClipboard('tag24937');return false;" class="tag-decoration">testing-v0.15</div><div id="tag6903" onclick="CopyToClipboard('tag6903');return false;" class="tag-decoration">testing-v0.15.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/7213e9983faf3d7f6b0d8958e557a660615768fc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/28393439041" target="_blank">2026-06-29 18:18:47</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="unpackerr" \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/unpackerr
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      unpackerr:
        container_name: unpackerr
        image: ghcr.io/hotio/unpackerr
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

## Configuration

You can use docker environment variables or a configuration file that should be stored in `/config/unpackerr.conf`. Take a look at the [upstream](https://github.com/davidnewhall/unpackerr){ target="_blank" rel="noopener" } project page for info on how to configure Unpackerr.

--8<-- "includes/wireguard.md"
